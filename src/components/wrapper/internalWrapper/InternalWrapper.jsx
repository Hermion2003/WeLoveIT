import  "./InternalWrapper.scss";


const InternalWrapper = ({backgroundColor,...props}) => {
return (
<div className={"internalWrapperContainer"} style={{background:backgroundColor}}>
    <div >

    {props.children}
    </div>
</div>
)
}
export default InternalWrapper;
