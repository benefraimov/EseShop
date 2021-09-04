import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // trim() - means trimming any white spaceif it's empty / 
        // what ever we type between the bruckets
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col xl={7}>
                    <Form.Control
                        type='text'
                        name='q'
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder='Search Products...'
                        className='mr-sm-2 ml-sm-5'

                    ></Form.Control>
                </Col>
                <Col>
                    <Button type='submit' variant='outline-success' className='p-2'>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
export default SearchBox

