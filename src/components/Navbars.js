import React from "react";
import './Navbars.css';

const navs = ['Web Development', 'Web Design', 'Mobile Development', 'Digital Marketing']; // List for the NavBar

const Navbars = () => { // ARROW FUNCTION

    return(
        <div>
            <div className="logo">Logo</div>
            {/* NAV ITEMS */}

            <nav>
                <ul>
                    {/* JS EMBEDDED IN MARKERS */}
                    {navs.map((item, i) =>(
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </nav>
          
            
        </div>
    );
}

export default Navbars;