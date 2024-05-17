//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

// ENS Interfaces
interface ENS {
    function setSubnodeOwner(bytes32 node, bytes32 label, address owner) external returns (bytes32);
}

interface Resolver {
    function setAddr(bytes32 node, address addr) external;
}

contract ENSSubdomainManager is Ownable {
    ENS private ens;
    Resolver private resolver;
    bytes32 public rootNode;

    constructor(address ensAddress, address resolverAddress, bytes32 _rootNode) {
        ens = ENS(ensAddress);
        resolver = Resolver(resolverAddress);
        rootNode = _rootNode;
    }

    function createSubdomain(string memory subdomain, address subdomainOwner) public onlyOwner {
        bytes32 subdomainLabel = keccak256(abi.encodePacked(subdomain));
        bytes32 subdomainNode = keccak256(abi.encodePacked(rootNode, subdomainLabel));

        // Set the subdomain owner
        ens.setSubnodeOwner(rootNode, subdomainLabel, address(this));
        
        // Set the resolver and address for the subdomain
        resolver.setAddr(subdomainNode, subdomainOwner);

        // Transfer ownership of the subdomain to the specified owner
        ens.setSubnodeOwner(rootNode, subdomainLabel, subdomainOwner);
    }
}
