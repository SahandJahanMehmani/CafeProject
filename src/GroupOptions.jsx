import './GroupOptions.css'

export default function GroupOptions({ options }) {
    return (
        <ul className="group-options">
            {options.map((option, index) => (
                <li key={index} >
                    <p>
                        {option.price} تومان
                    </p>
                    <div>
                        <p>{option.name}</p>
                        <button>
                            <img src='icons/photo.jpg'/>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}