import React from "react";
class App extends React.Component {
  constructor(){
      super()
      this.state ={
        value: ' ',
        items: []
      }
    }
    handleChange = (e) => {
      this.setState(
        {value: e.target.value}
      )
    }
    handleClick = () => {
      this.setState(state => {
        const items = state.items.concat(state.value);
        return {
          items,
          value: '',
        };
      });
      console.log("Value Added");
    }
    handelDelete = (index) => {
      this.setState(state => {
        const items = state.items.filter((item, itemIndex) => itemIndex !== index);
        return {
          items,
        };
      });
      console.log("Delete Clicked");
    }
    render() {
      return (
        <>
          <div>
              <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Type here"/>
              <button onClick={this.handleClick}>Add item</button>
          </div>
          {/* output on entering the text */}
          <div>
            {this.state.items.map((item, index) => (
              <div key={index}>
                <input type="text" defaultValue={item} />
                <button onClick={() => this.handelDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
        </>
      );
  }    
}

export default App;