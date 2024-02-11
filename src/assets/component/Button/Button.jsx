export function Button({name,fun}){
    return (
        <button onClick={fun}>{name}</button>
    );


}