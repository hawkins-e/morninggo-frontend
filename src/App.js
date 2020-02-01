import React from 'react';
import DivvyContainer from './DivvyContainer';
import CtaContainer from './CtaContainer';

class App extends React.Component {
    render(){
        return(
            <div>
                <DivvyContainer
                 getStation={this.getStation}/>
                <CtaContainer/>
            </div>
        )
    }

}

export default App 