import React, {useMemo} from 'react';
import {Pagination} from "react-bootstrap";
import {pagesArray} from "../../../utils/pages";

const MyPagination = ({paginationInfo, setPaginationInfo}) => {
    const pages = useMemo(() => {return pagesArray(paginationInfo.totalPages)},
        [paginationInfo.totalPages,]
    )
    return (
        <Pagination className={"d-flex justify-content-center"}>
            {pages.map(page => (
                <Pagination.Item
                    key={page}
                    active={page === paginationInfo.page}
                    onClick={() => {
                        setPaginationInfo({...paginationInfo,page})
                    }}
                >{page}</Pagination.Item>
            ))}
        </Pagination>
    );
};

export default MyPagination;