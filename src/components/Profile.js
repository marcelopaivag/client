import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext'

export default function Profile() {

    const ctx = useContext(UserContext)

    const { userSubmitForm } = ctx

    const {
        name,
        lastname,
        email,
    } = ctx.user

    const [userForm, setUserForm] = useState({
        name: "",
        lastname: "",
        email
    })

    const handleChange = async (event) => {

        setUserForm({
            ...userForm,
            [event.target.name]: event.target.value
        })

    }

    const sendData = (event) => {

        event.preventDefault()

        userSubmitForm(userForm)

    }

    useEffect(() => {

        const updateData = () => {

            return setUserForm({
                ...userForm,
                name,
                lastname,
            })

        }

        updateData()

    }, [])


    return (
        <main className="mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="h-1/2 bg-gray-100"></div>
                    <div>
                        <form className="space-y-8" onSubmit={(e) => sendData(e)}>
                            <div className="space-y-8">

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Tu información personal
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                        </p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">
                                                Tu nombre
                                            </label>
                                            <div className="mt-1">
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    value={userForm.name}
                                                    onChange={(e) => { handleChange(e) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">
                                                Tus apellidos
                                            </label>
                                            <div className="mt-1">
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    value={userForm.lastname}
                                                    onChange={(e) => { handleChange(e) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label for="email" className="block text-sm font-medium text-gray-700">
                                                Tu correo
                                            </label>
                                            <div className="mt-1">
                                                <input id="email"
                                                    disabled name="email"
                                                    type="email"
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    onChange={(e) => { handleChange(e) }}
                                                    value={userForm.email}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5">
                                <div className="flex justify-start">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Guardar cambios
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}
