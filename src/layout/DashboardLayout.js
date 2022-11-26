import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
             <div>
            <Header></Header>
            
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        
                        <li><Link to='/dashboard'>Details View</Link></li>
                        
                            <>
                            <li><Link to='/dashboard/orders'>My Orders</Link></li>
                            <li><Link to='/dashboard/users'>My Products</Link></li>
                            <li><Link to='/dashboard/add-product'>Add A Product</Link></li>
                            <li><Link to='/dashboard/myProduct'>My Products</Link></li>
                            </>
                        
                        
                    </ul>

                </div>
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;