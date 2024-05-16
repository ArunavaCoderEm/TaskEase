export default function Tododisplay({head, desc, val, id, whadel, update, updateId, updatecard}:any) {
  return (
    <>
    {(val == 1 || val == 0) && 
    <div className={`max-w-sm p-6 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg`}>
        <h1 className="mb-2 text-3xl font-bold overflow-hidden tracking-tight text-gray-900 dark:text-white">{head}</h1>
        <p className="mb-3 font-semibold text-blue-700 overflow-hidden text-xl">{desc}</p>
        <div className="icons grid grid-cols-2 mt-4">
            <svg onClick={() => {
                update();
                updatecard(updateId);
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 cursor-pointer rounded-md bg-blue-600 shab ch transition-all duration-300 mx-auto "><path className="hover:fill-red-600" fill="white" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
            <svg onClick={() => {
                whadel(id);
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 cursor-pointer ml-8 rounded-md bg-blue-600 shab ch transition-all duration-300"><path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </div>  
    </div>
    }
    {(val == 2) && 
    <div className={`max-w-sm p-6 bg-gradient-to-b from-green-300 to-green-500 rounded-lg`}>
        <h1 className="mb-2 text-3xl font-bold overflow-hidden tracking-tight text-gray-900 dark:text-white">{head}</h1>
        <p className="mb-3 font-semibold text-green-700 text-xl overflow-hidden">{desc}</p>
        <div className="icons grid grid-cols-2 mt-4">
            <svg onClick={() => {
                update();
                updatecard(updateId);
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 cursor-pointer rounded-md bg-blue-600 shab ch transition-all duration-300 mx-auto"><path fill="white" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
            <svg onClick={() => {
                whadel(id);
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 cursor-pointer ml-8 rounded-md bg-blue-600 shab ch transition-all duration-300"><path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </div>
    </div>
    }
    {(val == 3) && 
    <div className={`max-w-sm p-6 bg-gradient-to-b from-red-300 to-red-500 rounded-lg`}>
        <h1 className="mb-2 text-3xl font-bold overflow-hidden tracking-tight text-gray-900 dark:text-white">{head}</h1>
        <p className="mb-3 font-semibold text-red-700 text-xl overflow-hidden">{desc}</p>
        <div className="icons grid grid-cols-2 mt-4">
            <svg onClick={() => {
                update();
                updatecard(updateId);
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 cursor-pointer rounded-md bg-blue-600 shab ch transition-all duration-300 mx-auto"><path fill="white" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
            <svg onClick={() => {
                whadel(id);
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 cursor-pointer ml-8 rounded-md bg-blue-600 shab ch transition-all duration-300"><path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </div>
    </div>
    }
    </>
  )
}
