import { Title } from "@/components";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";


export default function () {
  return (
    <>
      <Title title="Orders" />

      <div className="mb-10 bg-yellow-50">
        <table className="min-w-full bg-blue-100">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #ID
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Nombre completo
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Estado
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Opciones
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-light">Mark</td>

              <td className="flex items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <IoCardOutline className="text-green-800" />
                <span className="mx-2 text-green-800">Pagada</span>
              </td>

              <td className="text-sm text-gray-900 font-light px-6">
                <Link
                  href="/orders/123"
                  className="hover:underline"
                >
                  Ver orden
                </Link>
              </td>
            </tr>

            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>

              <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Mark</td>

              <td className="flex items-center px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <IoCardOutline className="text-red-800" />
                <span className="mx-2 text-red-800">No Pagada</span>
              </td>

              <td className="px-6 text-sm text-gray-900 font-light">
                <Link
                  href="/orders/123"
                  className="hover:underline"
                >
                  Ver orden
                </Link>
              </td>

            </tr>


          </tbody>
        </table>
      </div>
    </>
  )
}
