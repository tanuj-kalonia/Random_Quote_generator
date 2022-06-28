import React from 'react'
import axios from 'axios';
import "./App.css"

class App extends React.Component {

    state = { advice: '' }

    componentDidMount() {
        this.fetchAdvice()
    }

    // no need to use const keyword as it is a inbuilt method in axios
    fetchAdvice = () => {
        axios.get('	https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
                // we need to pass this advice to the advice delared in state;
                // we can use setState hook to set the state

                // this.setState({ advice: advice });
                // this can also be writter as 
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { advice } = this.state;
        return (
            <div className='app app__flex'>
                <div className='card app__flex'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button app_flex' onClick={this.fetchAdvice}>
                        <span>Give new advice</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App