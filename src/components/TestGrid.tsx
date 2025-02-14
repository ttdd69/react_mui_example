import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from "react";

interface ImageData {
    id: number,
    name: string,
    image64: string,
    author: string,
    title: string,
    display: string
}

interface InfoData {
    id: number,
    name: string,
    status: string,
    moreInfo: string,
    display: string
}

interface TestGridDataItem {
    image : ImageData,
    info: InfoData
}
const imgUrl1 = "https://cdn.richmondmom.com/wp-content/uploads/2023/08/Types-of-Angels-You-Should-Know-About.jpeg"
const imgUrl2 = "https://cdn.richmondmom.com/wp-content/uploads/2023/08/Virtues-Angels.webp"

function getGridData() {
    let dt: TestGridDataItem[] = []
    for (let index = 0; index < 100; index++) {
        const _id = index + 1;
        if (_id % 2 == 0) {
            dt.push(
                 {
                    image: {
                        id: _id,
                        name: "Test name abd " + _id.toString(),
                        image64: imgUrl1,
                        author: "Author xyz" + _id.toString(),
                        title: "Title asdasd asdasd xyz" + _id.toString(),
                        display: 'block'
                    },
                    info : {
                        id: -1,
                        name:'',
                        status:'',
                        moreInfo:'',
                        display: 'none'
                    }
                })
        } else {
            dt.push(
                {
                   image: {
                       id: _id,
                       name: "Test name abd " + _id.toString(),
                       image64: imgUrl2,
                       author: "Author xyz" + _id.toString(),
                       title: "Title asdasd asdasd xyz" + _id.toString(),
                       display: 'block'
                   },
                   info : {
                       id: -1,
                       name:'',
                       status:'',
                       moreInfo:'',
                       display: 'none'
                   }
               })
        }
    }

    return dt
}

const gridData = getGridData();

const TestGrid = () => {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 } as const;
    const [wrapperDisplay, setWrapperDisplay] = useState<string>('block')

    function handleImageClick(e: any){
        const key = e.currentTarget.dataset.key;
    }
    
    const renderImg = (item:TestGridDataItem, index: number) => {
        return (
            <ImageList sx={{ width: 450, height: 450, overflow: 'hidden' }} variant="woven" cols={1} gap={8}>
            <Box sx={{display:{wrapperDisplay}}}>
            <ImageListItem key={index}>
                <img
                    srcSet={`${item.image.image64}?w=128&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.image.image64}?w=128&fit=crop&auto=format`}
                    alt={item.image.name}
                    loading="lazy"
                    style={{ borderRadius: '3%' }}
                    onClick={handleImageClick}
                    data-key= {item.image.id}
                />
                <ImageListItemBar
                    title={item.image.title}
                    subtitle={item.image.author}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.image.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
            </Box>
            </ImageList>
        )
    }

    const renderGridItem = (item:TestGridDataItem, index: number) => {
        return (
            <Grid key={index} size={colWidth} minHeight={160} sx={{ overflow: 'hidden' }}>
                {renderImg(item, index)}
            </Grid>
        );
    }

    return (
        <>
            <Box>
                <Typography sx={{ marginTop: 10 }} variant="h3" component="h2">List images</Typography>
            </Box>

            <Box sx={{ flexGrow: 1, borderSpacing: 1 }}>
                <Grid
                    container
                    sx={(theme) => ({
                        '--Grid-borderWidth': '1px',
                        borderTop: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        '& > div': {
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                            ...(Object.keys(colWidth) as Array<keyof typeof colWidth>).reduce(
                                (result, key) => ({
                                    ...result,
                                    [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                                        [theme.breakpoints.only(key)]: {
                                            borderRight: 'none',
                                        },
                                    },
                                }),
                                {},
                            ),
                        },
                    })
                    }
                >
                    {gridData.map((item, index) => (
                        renderGridItem(item, index)
                    ))}

                </Grid>
            </Box>
        </>
    )
}


export default TestGrid;
