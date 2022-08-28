import React from 'react'
import { useNavigate,useSearchParams,useParams } from 'react-router-dom'
export default function useRoutes(...param) {
    const navigate = useNavigate()
    const [search,setSearch] = useSearchParams()
    const params = useParams()
  return {
    navigate : navigate,
    searchParams :[search,setSearch],
    params:params
  }
}
