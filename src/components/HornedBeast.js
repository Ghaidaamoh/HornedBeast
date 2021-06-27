import React from 'react'
class HornedBeast extends React.Component {
    render() {
        let Information = [{
            title: 'UniWhal',
            imgUrl:
                "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            description: 'A unicorn and a narwhal nuzzling their horns',
            keyword: 'narwhal',
            horns: 1
        
        },
        {
            title: 'Rhino Family',
            imgUrl:
                "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            description: 'Mother (or father) rhino with two babies',
            keyword: 'rhino',
            horns: 2
        
        },
        {
            title: 'Unicorn Head',
            imgUrl: 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
            description: 'Someone wearing a creepy unicorn head mask',
            keyword: 'unicorn',
            horns: 1
        }
        ]

        return (

            <div>
                <HornedBeasts title={Information[0].title}  imgUrl={Information[0].imgUrl}  description={Information[0].description} keyword={Information[0].keyword} horns={Information[0].horns} />
                <HornedBeasts title={Information[1].title}  imgUrl={Information[1].imgUrl} description={Information[1].description} keyword={Information[1].keyword} horns={Information[1].horns} />
                <HornedBeasts title={Information[2].title}  imgUrl={Information[2].imgUrl} description={Information[2].description} keyword={Information[2].keyword} horns={Information[2].horns}  />
            </div>
        )
    }
}
export default HornedBeast