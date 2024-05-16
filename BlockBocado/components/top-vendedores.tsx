
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { AvatarImage, Avatar } from "@/components/ui/avatar"

export default function TopSellersComponent() {
  return (
    <div className="bg-white p-8 rounded-lg shadow m-16">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">TOP VENDEDORES</h2>
      <div className="grid grid-cols-1 gap-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Foto</TableHead>
              <TableHead>Colaborador</TableHead>
              <TableHead>Vendas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>0x225...c3B5</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>keukenrol.eth</TableCell>
              <TableCell>19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>0x225...c3B5</TableCell>
              <TableCell>16</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>0x225...c3B5</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>keukenrol.eth</TableCell>
              <TableCell>19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>0x225...c3B5</TableCell>
              <TableCell>16</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>0x225...c3B5</TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>0x225...c3B5</TableCell>
              <TableCell>8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Jessica Silva</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Fernando Lima</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Rafael Pereira</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>0x225...c3B5</TableCell>
              <TableCell>19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>13</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Gabrielly Tavares</TableCell>
              <TableCell>16</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>14</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Renan Matos</TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>15</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Hugo Souza</TableCell>
              <TableCell>8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>16</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Jessica Silva</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>17</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage alt="Avatar" src="/profile.png?height=32&width=32" />
                </Avatar>
              </TableCell>
              <TableCell>Fernando Lima</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}