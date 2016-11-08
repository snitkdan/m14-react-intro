// Main.jsx file

// Create a simple component
var ChipOrButton = React.createClass({
  render:function(){
    var check = this.props.check;
    return(
      <div className={check}>{check}</div>
    )
  }
});

// Render your component in the `main` section
ReactDOM.render(<div><ChipOrButton check='chip'/><ChipOrButton check='btn'/></div>, document.querySelector('main'));
