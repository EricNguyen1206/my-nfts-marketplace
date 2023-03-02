import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBagOutlined } from "@mui/icons-material";

import "./NFTCard.scss";
import { NFT } from "assets/data";

export type NFTCartProps = {
    item: NFT;
};

const NFTCard = ({ item }: NFTCartProps) => {
    const { title, id, currentBid, creatorImg, imgUrl, creator } = item;

    // const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div className="nft-card">
            <div className="nft-card__img">
                <img src={imgUrl} alt="" />
            </div>

            <div className="nft-card__content">
                <h5 className="nft-card__title">
                    <Link to={`/market/${id}`}>{title}</Link>
                </h5>

                <div className="nft-card__info">
                    <div className="nft-card__info--creator">
                        <img src={creatorImg} alt="" />
                    </div>

                    <div className="nft-card__info--detail">
                        <div>
                            <h6>Created By</h6>
                            <p>{creator}</p>
                        </div>
                        <div>
                            <h6>Current Bid</h6>
                            <p>{currentBid} ETH</p>
                        </div>
                    </div>
                </div>

                <div className="nft-card__actions">
                    <button className="nft-card__actions--btn">
                        <ShoppingBagOutlined /> Place Bid
                    </button>

                    {/* {showModal && (
                        <Modal open={showModal} setOpen={setShowModal} />
                    )} */}

                    <span className="nft-card__actions--link">
                        <Link to="#">View History</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
