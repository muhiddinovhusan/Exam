
import { PageItem } from 'react-bootstrap';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, handleChange, hasPrev, hasPrev2 }) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
       
            <div className="pagination">
                <PageItem className="prev" disabled={!hasPrev} onClick={() => handleChange("prev")}>prev</PageItem>


                {
                    pages.map((page, i) => {
                        return (

                            <ul className="btn-ul"  key={i}>

                                <PageItem className="ul-li " onClick={() => setCurrentPage(page)}>{page}</PageItem>

                            </ul>






                        )
                    })
                }
                <PageItem disabled={!hasPrev2} className="next " onClick={() => handleChange("next")}>next</PageItem>
            </div>
     
    )
}

export default Pagination