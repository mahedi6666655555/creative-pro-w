import React from 'react';

const Single = (props) => {

    let { name, img, gender, age, nationality, height } = props.single

    // console.log(height);
    // let btn1 = props.btn1


    return (
        <div>
            <div className='w-96 relative  pb-4 rounded-lg ml-2 mr-2  border-2 shadow-xl'>
                <div>
                    <img className='w-full  p-3' src={img} alt="" />
                </div>
                <div className='pl-5 pb-14'>
                    <h5 className='pb-2 text-lg font-bold'>name: {name}</h5>
                    <p className='pb-2 text-lg font-bold'>age: {age}</p>
                    <p className='pb-2 text-lg font-bold'>nationality: {nationality}</p>
                    <p className='pb-2 text-lg font-bold'>gender: {gender}</p>
                    <p className='pb-2 text-lg font-bold'>height: {height}</p>
                </div>
                <div>
                    {/* reserve */}
                    {/* onClick={()=>btn1()} */}
                    {/* reserve */}

                    <button className='w-full rounded-lg hover:bg-red-200 p-3 text-white  bottom-0 bg-orange-500 absolute'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Single;