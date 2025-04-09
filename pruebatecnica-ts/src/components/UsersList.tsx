import { SortBy, type User } from '../types.d'

interface Props {
  users: User[]
  showColor: boolean
  deleteUsers: (email: string) => void
  changeSorting: (sort: SortBy) => void
}

export function UsersList({
  changeSorting,
  deleteUsers,
  users,
  showColor,
}: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Foto </th>
          <th className='pointer' onClick={() => changeSorting(SortBy.NAME)}>
            Nombre{' '}
          </th>
          <th className='pointer' onClick={() => changeSorting(SortBy.LAST)}>
            Apellido{' '}
          </th>
          <th className='pointer' onClick={() => changeSorting(SortBy.COUNTRY)}>
            Pais{' '}
          </th>
          <th>Acciones </th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColor ? backgroundColor : 'transparent'

          return (
            <tr key={user.email} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUsers(user.email)
                  }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
