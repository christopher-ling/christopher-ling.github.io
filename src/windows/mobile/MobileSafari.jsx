import { MobileWindowHeader } from "#components"
import { blogPosts } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { BookOpen, ChevronLeft, ChevronRight, Copy, Mic, MoveRight, Search, Share } from "lucide-react";

const MobileSafari = () => {
  return (
    <>
        <MobileWindowHeader target="safari" title="Safari" />

        <div className="blog">
            <h2>My Developer Blog</h2>

            <div className="space-y-8">
                {blogPosts.map(({ id, image, title, date, link}) => (
                    <div key={id} className="blog-post">
                        <div className="col-span-2">
                            <img src={image} alt={title} />
                        </div>

                        <div className="content">
                            <p>{date}</p>
                            <h3>{title}</h3>
                            <a href={link} target="_blank" rel="noopener noreferrer">Check out the full post <MoveRight className="icon-hover" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <footer>
            <div className="search">
                <Search className="icon" />
                <input type="text" placeholder="Search or enter website name" className="flex-1" />
                <Mic className="icon" />
            </div>

            <div className="toolbar">
                <ChevronLeft className="icon" />
                <ChevronRight className="icon" />
                <Share className="icon" />
                <BookOpen className="icon" />
                <Copy className="icon" />
            </div>
        </footer>
    </>
  )
}

const MobileSafariWindow = MobileWindowWrapper(MobileSafari, "safari");

export default MobileSafariWindow;
