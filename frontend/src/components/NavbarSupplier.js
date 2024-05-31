import React from 'react'
import { Link } from 'react-router-dom'

const NavbarSupplier = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <p class="navbar-item" href="https://bulma.io">
            <strong>Daftar Supplier Cloudmart</strong>
            
            </p>

        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <Link to={`/Users`} class="button is-primary">
                    Member
                </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavbarSupplier