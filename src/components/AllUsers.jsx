import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import ErrorPage from "./ErrorPage"
import UserThumbnail from "./UserThumbnail"
import Pagination from "./Pagination"
import UserFullModal from "./UserFullModal"

const AllUsers = () => {
    const url = import.meta.env.VITE_DATA_URL
    const USERS_PER_PAGE = 6
    const [users, setUsers] = useState([])
    const [isNextPage, setIsNextPage] = useState(false)
    const [loading, setLoading] = useState(true)
    const [paginationLoading, setPaginationLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedUserData, setSelectedUserData] = useState({})
    const [errors, setErrors] = useState(null)
    const [page, setPage] = useState(1)

    function openUserModal(userData) {
        setSelectedUserData(userData)
        setIsModalOpen(true)
    }

    async function fetchUsers() {
        const query = `?page=${page}&limit=${USERS_PER_PAGE}`
        setLoading(true)
        try {
            const response = await axios.get(url + query)
            setUsers(response.data)
            setLoading(false)
        }
        catch (err) {
            console.error(err)
            setErrors(err)
            setLoading(false)
        }
    }

    async function checkNextPage() {
        try {
            setPaginationLoading(true)
            const query = `?page=${page + 1}&limit=${USERS_PER_PAGE}`
            const response = await axios.get(url + query)
            if (!response.data.length) {
                setPaginationLoading(false)
                return false
            }
            setPaginationLoading(false)
            return true
        }
        catch (err) {
            console.error(err)
            setErrors(err)
            setPaginationLoading(false)
            return false
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetchUsers()
            const result = await checkNextPage()
            setIsNextPage(result)
        }
        fetchData()
    }, [page])

    if (loading || paginationLoading) {
        return (
            <Loading />
        )
    }

    if (errors) {
        return (
            <ErrorPage content='Something went wrong' />
        )
    }

    return (
        <div className={`flex justify-center`}>
            <div className="flex flex-col items-center gap-8">{
                !users.length ? <ErrorPage content='Sorry, no users found' /> :
                    <div className=" mt-10 flex flex-wrap items-center w-[86%] justify-center gap-4">
                        {
                            users.map((user, index) => (
                                <UserThumbnail onClickAction={() => openUserModal(user)} key={index} user={user} />
                            ))
                        }
                    </div>
            }
                <Pagination page={page} setPage={setPage} isNextPage={isNextPage} />
            </div>
            {
                isModalOpen && (
                    <UserFullModal userData={selectedUserData} closeModal={setIsModalOpen} />
                )
            }
        </div>
    )
}

export default AllUsers