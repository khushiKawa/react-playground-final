const Events = (props) => {
    return ( <div className={props.eventsClass} onDoubleClick={props.eventsClassHandler}>
        <h2>Events covered </h2>
        <ul>
            <li>onChange on textboxes to preview user</li>
            <li>onMouseEnter on colored buttons</li>
            <li>onClick on submit button to display users array underneath</li>
            <li>onMouseDown ie. mouse click to view dark mode</li>
            <li>onMouseUp ie. mouse release to remove dark mode</li>
            <li>onDoubleClick on events covered card to toggle style</li>
            <li>onFocus on textboxes</li>
            <li>onBlur on textboxes</li>
        </ul>
    </div> );
}
 
export default Events;