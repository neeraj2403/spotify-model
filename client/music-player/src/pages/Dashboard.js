import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
// import './header.css'
function Dashboard(){
    const navigate = useNavigate();
    const navigateMusic = () => {
        // 👇️ navigate to /
        navigate('/addMusic');
      };

    return (
        
    <Button onClick = {navigateMusic}  variant="primary">Add music</Button>
    )
    }

export default Dashboard
