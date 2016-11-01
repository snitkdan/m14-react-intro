// Main.jsx file

// Create a simple component
var SimpleComponent = React.createClass({
    render: function() {
        var name = 'Daniel';
        var interest = 'Data Science';
        return (
            <div>
                <p>{name}</p>
                <p>{interest}</p>
            </div>
        )
    }
});

// In your render function...
// Set variables `name` and `interest`

// Return div with two paragraphs

// Render your component in the `main` section
ReactDOM.render(
    <div>
      <SimpleComponent/><SimpleComponent/><SimpleComponent/><SimpleComponent/><SimpleComponent/><SimpleComponent/>
    </div>,
    document.querySelector('main')
);
