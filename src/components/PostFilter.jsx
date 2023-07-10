import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MySelect from "./UI/select/MySelect";
import {sortOptions} from "./postlist_data";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter,processFilter}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <MySelect
                        values={sortOptions}
                        defaultValue="Выберите сортировку"
                        current={filter.sort}
                        onChange={processFilter}
                    ></MySelect>
                </Col>
                <Col>
                    <MyInput
                        placeholder={"Filter..."}
                        value={filter.qs}
                        processFilter={processFilter}
                    ></MyInput>
                </Col>
            </Row>
        </Container>
    );
};

export default PostFilter;