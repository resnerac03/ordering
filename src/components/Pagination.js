import React, {useState} from 'react'

const Pagination = ({ dataPerPage, totalData, paginate }) => {

    const pageNumbers = [];
    const [current, setCurrent] = useState(1);

    for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${current == number ? '-active' : ''}`}>
                        <a onClick={() => {
                                paginate(number)
                                setCurrent(number)
                            }
                        } 

                        className="page-link" >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;
