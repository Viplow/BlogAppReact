import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import SignUpPage from '../components/SignUpPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<PublicRoute> <HomePage/> </PublicRoute>} />
                    <Route path='/login' element={ <LoginPage/>} />
                    <Route path='/signup' element={ <PublicRoute><SignUpPage/></PublicRoute>} />
                    <Route path='/blogs' element={<PrivateRoute> <BlogListPage/> </PrivateRoute>} />
                    <Route path='/create' element={<PrivateRoute> <AddBlogPage/> </PrivateRoute>} />
                    <Route path='/edit/:id' element={<PrivateRoute> <EditBlogPage/> </PrivateRoute>} />
                    <Route path='/blogs/:id' element={<PrivateRoute> <BlogDetailsPage/> </PrivateRoute>} />
                    <Route path='/contact' element={<ContactPage/>} />
                    <Route path="*" element={<NotFoundPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
