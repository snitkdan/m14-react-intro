// Main.jsx file

// Create a simple component
var PlayButton = React.createClass({
    render:function(){
        var val = 'Play';
        return(
          <button>{val}</button>
        );
    }
});

// Render your component in the `main` section
ReactDOM.render(
  <PlayButton/>, document.querySelector('#root')
);
