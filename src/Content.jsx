import React from 'react'
import data from './data'
import Menu from './Menu'
import GroupOptions from './GroupOptions'
import Footer from './Footer'
import main from './images/Main.jpg'
import main2 from './images/Main2.jpg'
import './Content.css'

export default function Content (){
    const [isMenuVisible, setIsMenuVisible] = React.useState(false)
    
    const [visibleGroupId, setVisibleGroupId] = React.useState(null);
    

    const toggleMenu = () => {
        setIsMenuVisible (!isMenuVisible)
        setVisibleGroupId(null);
    }

    const toggleMenuGroup = (id) => {
        setVisibleGroupId(visibleGroupId === id ? null : id);
    };

    const currentGroup = data.find((group) => group.id === visibleGroupId);

    return (
        <>
        <img className='content-img' src={main2}/>
        <h2 id='about' className='content-header'>کافه ۳۰۰ میل</h2>
        <p className='content-text'>
        جایی که هنر، طبیعت و حس نوستالژی در هم می‌آمیزند. در اینجا می‌توانید در محیطی گرم و صمیمی، با دکوراسیونی که با عشق از آیتم‌های قدیمی و گل‌های طبیعی طراحی شده، آرامش را تجربه کنید. صدای موسیقی اصیل ایرانی، یادداشت‌های کوچک پر از حس روی دیوار، و نوشیدنی‌هایی که با دقت و سلیقه آماده می‌شوند، تجربه‌ای منحصر به فرد برای شما رقم می‌زنند. ما در کافه سیصد میل منتظریم تا لحظاتی به‌یادماندنی را با شما شریک شویم
        </p>
        <img className='content-img' src={main}/>
        <div className='menu'>
            <h3 id='menu' className='menu-header'> منوی کافه </h3>
            <button className='menu-main-button' onClick={toggleMenu}>
                {isMenuVisible ? 'مخفی کردن منو' : 'برای مشاهده منو کلیک کنید'}
            </button>
        </div>
            {isMenuVisible && (
            <div className= 'menu-main-container'>
                {data.map((menuGroup) => (
                <Menu
                    key={menuGroup.id}
                    group={menuGroup}
                    isVisible={menuGroup.id === visibleGroupId}
                    onToggle={() => toggleMenuGroup(menuGroup.id)}
                />
            ))}
            </div>
            )}
        {currentGroup && (
            <div className="group-options-container">
                <GroupOptions options={currentGroup.options} />
            </div>
        )}
        <img className='content-img' src={main}/>
        </>
    )
}