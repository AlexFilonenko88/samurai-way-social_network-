import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124404533/original/e1efb284e4feb2c44e45a3424d671c9dfa1a9db0/design-3d-neon-light-logo.jpg'
                    alt={'logo'}/>
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
            <div className='content'>
                <div className='content-wrapper'>
                    <img
                        src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649325800_28-vsegda-pomnim-com-p-foto-morya-plyazha-43.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            Post1
                        </div>
                        <div>
                            Post3
                        </div>
                        <div>
                            Post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
