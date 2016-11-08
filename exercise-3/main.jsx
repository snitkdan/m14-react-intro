// Main.jsx file

// Data to pass into our parent component
var data = [
  {text: 'BIZ'},
  {text: 'BAZ'},
  {text: 'BIF'},
]

// Create an DropDownItem element to render a single item in the drop down
var DDI = React.createClass({
  render:function(){
    var text = this.props.text;
    var key = this.props.key;
    var index = this.props.index;
    return(
        <li key={key}><a href="#!">{text}<span className="new badge">{index}</span></a></li>
    )
  }
});

// Create a DropDown element to render several DropDownItems
var DD = React.createClass({
  render:function(){
    console.log(data);
    var data = this.props.data;
    console.log(data);
    return(
      <div>
        <ul>
          {data.map((item,index) => <DDI key={index} index={index + 1} text={item.text}/>)}
        </ul>
      </div>
    )
  }
});

// Render your component in the `main` section
ReactDOM.render(<DD data={data}/>,
  document.querySelector('main'));
