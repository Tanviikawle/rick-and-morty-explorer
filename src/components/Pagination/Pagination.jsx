import React ,{useState,useEffect}from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.css'

const Pagination = (props) => {
  let pageChange = (data) => {
    props.setPageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return <>
    <style jsx>
        {`
          .btn a{
            color: "white"
          }
          
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
    </style>
    <ReactPaginate
    className="pagination justify-content-center my-4 gap-4"
    nextLabel="Next"
    forcePage={props.pageNumber === 1 ? 0 : props.pageNumber - 1}
    previousLabel="Prev"
    previousClassName="btn btn-primary fs-5 prev"
    nextClassName="btn btn-primary fs-5 next"
    activeClassName="active"  
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    pageCount={props.info?.pages}
    onPageChange={pageChange}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    />
  </>
}

export default Pagination
