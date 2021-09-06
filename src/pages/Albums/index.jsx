import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Wrapper } from '../../components/Global.style';
import { GetWithoutHeader } from '../../services';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Album = () => {

    let {id} = useParams();
    // let id = query.get('id');

    // console.log(id);

    const [albums, setAlbums] = React.useState([]);

    React.useEffect(() => {

        let mounted = true;
        if (mounted) {
            GetWithoutHeader(`/albums/${id}/photos`)
                .then(({ data }) => {
                    setAlbums(data);
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        return() => {
            mounted = false;
        }
    },[]);


    return (
        <Wrapper>
            <Container>

                <div className="flex flex-wrap w-full h-full items-start justify-center mt-28">
                    {
                        albums.map((res, index) => (
                            <div key={res.id + index} className="w-full md:w-2/5 lg:w-72 m-2 md:m-2 lg:m-3 xl:m-2 border-0 ">

                                <div className="w-full h-64 border-0">

                                    <img src={res.url} className="w-full h-full object-cover border-0" alt="artcover" />

                                </div>

                                <p className="font-bold text-sm text-white mt-2 capitalize">
                                    {res.title}
                                </p>

                            </div>
                        ))
                    }

                </div>
            </Container>
        </Wrapper>
    );
}

export default Album;
