// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Blockbocado is Ownable {
    struct User {
        string name;
        address wallet;
        string profileImageUrl;
        uint256 registrationDate;
    }

    struct Product {
        string name;
        string description;
        string photoUrl;
        string geoCoordinates;
        uint256 creationDate;
        bool sold;
        bool paid;
    }

    mapping(address => User) public users;
    mapping(address => Product[]) public products;
    mapping(address => address[]) public productPurchasers;

    event UserRegistered(address indexed user, string name, string profileImageUrl, uint256 registrationDate);
    event ProductAdded(address indexed seller, string name, string description, string photoUrl, string geoCoordinates, uint256 creationDate);
    event ProductSold(address indexed seller, address indexed buyer, uint256 productId, uint256 timestamp);
    event ProductPaid(address indexed seller, address indexed buyer, uint256 productId, uint256 timestamp);

    modifier onlyRegistered() {
        require(users[msg.sender].wallet != address(0), "User not registered");
        _;
    }

    function registerUser(string memory _name, string memory _profileImageUrl) public {
        require(users[msg.sender].wallet == address(0), "User already registered");

        users[msg.sender] = User({
            name: _name,
            wallet: msg.sender,
            profileImageUrl: _profileImageUrl,
            registrationDate: block.timestamp
        });

        emit UserRegistered(msg.sender, _name, _profileImageUrl, block.timestamp);
    }

    function addProduct(string memory _name, string memory _description, string memory _photoUrl, string memory _geoCoordinates) public onlyRegistered {
        products[msg.sender].push(Product({
            name: _name,
            description: _description,
            photoUrl: _photoUrl,
            geoCoordinates: _geoCoordinates,
            creationDate: block.timestamp,
            sold: false,
            paid: false
        }));

        emit ProductAdded(msg.sender, _name, _description, _photoUrl, _geoCoordinates, block.timestamp);
    }

    function buyProduct(address _seller, uint256 _productId) public onlyRegistered {
        require(_productId < products[_seller].length, "Invalid product ID");
        require(!products[_seller][_productId].sold, "Product already sold");

        products[_seller][_productId].sold = true;
        productPurchasers[_seller].push(msg.sender);

        emit ProductSold(_seller, msg.sender, _productId, block.timestamp);
    }

    function markProductPaid(address _seller, uint256 _productId) public onlyRegistered {
        require(_productId < products[_seller].length, "Invalid product ID");
        require(products[_seller][_productId].sold, "Product not sold");
        require(!products[_seller][_productId].paid, "Product already paid");

        products[_seller][_productId].paid = true;

        emit ProductPaid(_seller, msg.sender, _productId, block.timestamp);
    }

    // CRUD functions for user data
    function updateUser(string memory _name, string memory _profileImageUrl) public onlyRegistered {
        User storage user = users[msg.sender];
        user.name = _name;
        user.profileImageUrl = _profileImageUrl;

        emit UserRegistered(msg.sender, _name, _profileImageUrl, block.timestamp);
    }

    function deleteUser() public onlyRegistered {
        delete users[msg.sender];
        delete products[msg.sender];
        delete productPurchasers[msg.sender];
    }

    // CRUD functions for product data
    function updateProduct(address _seller, uint256 _productId, string memory _name, string memory _description, string memory _photoUrl, string memory _geoCoordinates) public onlyRegistered {
        require(_productId < products[_seller].length, "Invalid product ID");
        Product storage product = products[_seller][_productId];
        product.name = _name;
        product.description = _description;
        product.photoUrl = _photoUrl;
        product.geoCoordinates = _geoCoordinates;

        emit ProductAdded(_seller, _name, _description, _photoUrl, _geoCoordinates, block.timestamp);
    }

    function deleteProduct(address _seller, uint256 _productId) public onlyRegistered {
        require(_productId < products[_seller].length, "Invalid product ID");
        delete products[_seller][_productId];
    }
}