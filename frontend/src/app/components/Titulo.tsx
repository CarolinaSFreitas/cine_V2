'use client'
import Link from "next/link"
import { useContext } from "react"
import { RiUserShared2Line } from "react-icons/ri"
import { BiLogOutCircle } from "react-icons/bi"
import { ClienteContext } from "../context/ClienteContext"
import Swal from "sweetalert2"

function Titulo() {

  const { idClienteLogado, nomeClienteLogado, mudaLogin } = useContext(ClienteContext)

  function logout() {
    Swal.fire({
      title: "Confirma saída do sistema?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.isConfirmed) {
        mudaLogin({ id: null, nome: ""})
      }
    });
  }

  return (
    <nav className="border-red-800 bg-red-800 dark:bg-red-800 dark:border-red-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./pipoca.png" className="h-12" alt="AvenidaVídeo Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">CineClube Avenida</span>
        </Link>
        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-red-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-red-800 md:dark:bg-transparent dark:border-red-700">
            <li>
              {idClienteLogado ?
                <div>
                  <BiLogOutCircle className="inline" />{nomeClienteLogado} - 
                  <span onClick={logout} 
                        style={{cursor: 'pointer'}}> (sair)</span>  
                </div>
                :
                <Link href="/login" className="block py-2 px-3 md:p-0 text-white bg-red-700 rounded md:bg-transparent md:text-white md:dark:text-white dark:bg-red-600 md:dark:bg-transparent" aria-current="page">
                  <RiUserShared2Line className="inline" /> Entrar
                </Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Titulo