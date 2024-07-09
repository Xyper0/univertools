import {useState , useEffect} from 'react' ;
import {Link} from 'react-router-dom'; 
import {LuFileSymlink } from 'react-icons/lu';
import { IoBody } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";
import { TbMoodKidFilled } from "react-icons/tb";
import { IoCalendarSharp } from "react-icons/io5";
import { BsCalendar2DayFill } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { CiBarcode } from "react-icons/ci";
import Alert from '@mui/material/Alert';
import {AlertRed} from './alerts'
import { IoSearchSharp } from "react-icons/io5";



import '../stylesheet/compsStyle/services.css';
export default function Services () {
    const [searchTerm, setSearchTerm] = useState('');
    const [services, setServices] = useState([
        { to: 'tools/age', icon: <TbMoodKidFilled color='white' size={50} />, label: 'حساب العمر' },
        { to: 'tools/balanced', icon: <AiOutlinePercentage color='white' size={50} />, label: 'حساب النسبة الموزونة' },
        { to: 'tools/calories', icon: <IoBody color='white' size={50} />, label: 'حساب السعرات الحرارية' },
        { to: 'tools/two-dates', icon: <IoCalendarSharp color='white' size={50} />, label: 'حساب الفرق بين تاريخين' },
        { to: 'tools/days', icon: <BsCalendar2DayFill color='white' size={50} />, label: 'حساب عدد الايام المتبقية' },
        { to: 'tools/file-format', icon: <FaFile color='white' size={50} />, label: 'تحويل تنسيق ملف' },
        { to: 'tools/qrcode', icon: <BsQrCode color='white' size={50} />, label: 'QrCode إنشاء' },
        { to: 'tools/barcode', icon: <CiBarcode color='white' size={50} />, label: 'BarCode إنشاء' },
    ]);

    const [filteredServices, setFilteredServices] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
    
            const filtered = services.filter((service) =>
                service.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredServices(filtered); 
          setShowAlert(filtered.length === 0 && searchTerm !== '');

    },[searchTerm , services])


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
        <div className='services'>
            {showAlert && (
                <AlertRed alert_text="لقد بحثت عن خدمة غير موجودة" />
                )}
        <div className='search-container'>
              <input type='text' value={searchTerm} onChange={handleSearch} placeholder='ابحث عن خدمة'/>
            </div>

        <div className='services-div'>
        {showAlert && (
            services.map((service , index) => (
                <Link to={service.to} key={index}>
                <div className='box' >
                    <div className='box-elements'>
                    <a>{service.icon}</a>
                    <br/>
                    <a>{service.label}</a>
                    </div>
                </div>
                </Link>  
                
                        ))

                )}
            {filteredServices.map((service , index) => (
                 <Link to={service.to} key={index}>
                 <div className='box' >
                     <div className='box-elements'>
                     <a>{service.icon}</a>
                     <br/>
                     <a>{service.label}</a>
                     </div>
                 </div>
                 </Link>  
            ))}
        </div>
        </div>
        </>
    )
}; 