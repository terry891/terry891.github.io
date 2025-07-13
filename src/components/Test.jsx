function Test() {
    return <div>Test Component</div>;
}

function TestWithProps(props) {
    return <div>Test Component with props: {props.message}</div>;
}

export function AnotherFunction() {
    return "This is another function";
}

export default Test; // This makes the Test component available for import in other files
export { TestWithProps }; // Named export for the component with props
