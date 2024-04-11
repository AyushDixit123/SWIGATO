box-sizing is a CSS property that determines how the width and height of an element are calculated, including padding and borders 
With box-sizing: border-box;, the width and height of the element include the padding and border sizes, so they're calculated from the outer edge of the border.

The exact prop in React Router's NavLink component is used to control when the activeClassName should be applied to the NavLink. It ensures that the NavLink is only considered active when the current URL matches the NavLink's to prop exactly.


The activeClassName prop is used in React Router's NavLink component to specify the class name that should be applied to the NavLink when it is considered active, i.e., when the current URL matches the NavLink's to prop.
This key attribute is not a standard HTML attribute but is a special attribute used by these frameworks to help identify individual elements within a list and optimize their rendering performance.

When rendering a list of elements in React or Vue.js, each element should have a unique key attribute associated with it. This allows the framework to efficiently update and re-render the list when elements are added, removed, or reordered.



Contexts in React are used to pass data through the component tree without having to pass props manually at every level.

Here, a new component called StoreContextProvider is defined. This component serves as the provider for the StoreContext, which means it will provide the context value to its children components.
const StoreContextProvider = (props) => {



The set property of a selector is a function that determines how the selector's value is updated. 