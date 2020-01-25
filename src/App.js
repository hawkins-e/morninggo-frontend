import React from 'react';
import DivvyContainer from './DivvyContainer';

class App extends React.Component {



    render(){
        return(
            <div>
                <DivvyContainer
                 getStation={this.getStation}/>
            </div>
        )
    }

}

export default App 