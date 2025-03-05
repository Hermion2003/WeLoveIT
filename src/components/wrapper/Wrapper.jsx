import  "./Wrapper.scss";


const Wrapper = ({...props}) => {
return (
<div className={"wrapperContainer"} {...props}>
    <div>
    {props.children}
    </div>
</div>
)
}
export default Wrapper;
