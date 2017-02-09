import React, { Component } from 'react';
import MyKeyWord from './MyKeyWord';
import MyLink from './MyLink';
import { browserHistory } from 'react-router';

class Page4 extends Component{

    constructor(props) {
        super(props);
        //this.state = this.props.dataForStep4;
        this.state = {
            myKeyWords:[{
                keyWords:''
            }],
            myLinks:[{
                service:'',
                url:''
            }]
        };
        //console.log(this.state);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);

        this.handleChangeD = this.handleChangeD.bind(this);
        this.addFormD = this.addFormD.bind(this);
        this.removeFormD = this.removeFormD.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        const path = '/page5';
        console.log(path);
        browserHistory.push(path);
        event.preventDefault();
    }

    handleChange(name, value, id) {
        console.log(name, value, id,);
        const myKeyWords = this.state.myKeyWords;
        myKeyWords[id][name] = value;

        this.setState({
            myKeyWords:myKeyWords
        });
    }

    addForm(event){
        //console.log('add form');
        this.setState(state => {
            state.myKeyWords.push({myKeyWords:''});
            return {keyWords: state.keyWords};
        });
    }

    removeForm(event){
        //console.log('remove form');
        var formIndex = parseInt(event.target.value, 10);
        //console.log('remove form: %d', formIndex, this.state.skills[formIndex]);
        this.setState(state => {
            state.myKeyWords.splice(formIndex, 1);
            return {myKeyWords: state.myKeyWords};
        });
    }

    handleChangeD(name, value, id) {
        console.log(name, value, id,);
        const myLinks = this.state.myLinks;
        myLinks[id][name] = value;

        this.setState({
            myLinks:myLinks
        });
    }

    addFormD(event){
        //console.log('add form');
        this.setState(state => {
            state.myLinks.push({myLinks:''});
            return {myLinks: state.myLinks};
        });
    }

    removeFormD(event){
        //console.log('remove form');
        var formIndex = parseInt(event.target.value, 10);
        //console.log('remove form: %d', formIndex, this.state.skills[formIndex]);
        this.setState(state => {
            state.myLinks.splice(formIndex, 1);
            return {myLinks: state.myLinks};
        });
    }
    
    render(){
        return(
            <div className="page4">
                <h3>My Key Words</h3>
                <div>{ this.state.myKeyWords.map(
                    (element, formIndex) => {
                        element.id=formIndex;
                        return <div key={formIndex}>
                            <h4>Tab #{element.id}</h4>
                            <MyKeyWord
                                name={formIndex}
                                onChange={this.handleChange}
                                elementData={element}/>
                            <button type="button"
                                    className="btn btn-danger"
                                    value={formIndex}
                                    onClick={this.removeForm}
                            >Remove</button>
                        </div>;
                    }
                )}
                    <br/>

                    <input type="button" className="btn" onClick={this.addForm} value="Add form" />
                </div>
                <h3>My Links</h3>
                <div>{ this.state.myLinks.map(
                    (element, formIndex) => {
                        element.id=formIndex;
                        return <div key={formIndex}>
                            <h4>Tab #{element.id}</h4>
                            <MyLink
                                name={formIndex}
                                onChange={this.handleChangeD}
                                elementData={element}/>
                            <button type="button"
                                    className="btn btn-danger"
                                    value={formIndex}
                                    onClick={this.removeFormD}
                            >Remove</button>
                        </div>;
                    }
                )}
                </div>

                <br/>
                <input type="button" className="btn" onClick={this.addFormD} value="Add form" />
                <br/><br/>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
export default Page4;