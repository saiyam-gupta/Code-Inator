import { RightComponent } from "./RightComponent"
import "./index.scss"

export const HomeScreen = () => {
    return (
        <div className='home-container'>
            <div className='left-container'>
                <div className="items-container">
                    <img src="logo.png" alt="logo"/>
                    <h1>Code Editor</h1>
                    <h2>Code. Compile. Debug</h2>
                    <button>
                        <span className="material-icons">add</span>
                        <span>Create Playground</span>
                    </button>
                </div>
            </div>
            <RightComponent/>
        </div>
    )
}