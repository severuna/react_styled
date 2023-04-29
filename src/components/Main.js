import Contacts from "./Contacts";

export function Main ( props ) {
    return (
        <div className='main column'>
            <h1 className='title'>Homework 16. ReactJS. Hooks</h1>
            <Contacts props={props} />
        </div>
    )
}
export default Main;
