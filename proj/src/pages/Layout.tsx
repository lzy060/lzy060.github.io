import { Outlet } from 'react-router-dom';
import HUD from '../pages/HUD'

const Layout: React.FC = () => {
    return (
        <div>
            <HUD />
            <Outlet />
        </div>
    )
}

export default Layout
