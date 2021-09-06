import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper } from '../../components/Global.style';
import { GetWithoutHeader } from '../../services';

const Artists = () => {

    const [artist, setArtist] = React.useState([]);

    React.useEffect(() => {

        let mounted = false;
        if(!mounted){
            GetWithoutHeader('/users')
            .then(({data}) => {
               setArtist(data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        return ()=> mounted = true;
    }, [artist]);


    return (
        <Wrapper>
            <Container>

                <div className="w-full lg:w-1/2 mx-auto mt-10 overflow-auto h-full text-white">
                    <table className="table-auto border-collapse border border-blue-400 w-full h-full">
                    <thead>
                        <tr>

                        <th className="p-2 border border-blue-400">S/N</th>
                        <th className="p-2 border border-blue-400">Name</th>
                        <th className="p-2 border border-blue-400">Email</th>
                        <th className="p-2 border border-blue-400">City</th>
                        <th className="p-2 border border-blue-400">Tool</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            artist.map((res, index) => (
                                <tr key={res.id + index}>
                                    <td className="p-2 border border-blue-400">{index + 1}</td>
                                    <td className="p-2 border border-blue-400">{res.name}</td>
                                    <td className="p-2 border border-blue-400">{res.email}</td>
                                    <td className="p-2 border border-blue-400">{res.address.city}</td>
                                    <td className="p-2 border border-blue-400">
                                        <Link to={'album/'+res.id} className="rounded-md flex justify-center items-center text-xs font-bold px-1 w-24 h-8 bg-blue-400 text-white">
                                            View Album
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr></tr>
                    </tbody>
                </table>

            </div>
            </Container>
        </Wrapper>
    );
}

export default Artists;
