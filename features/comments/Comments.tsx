import { useState } from "react";
import Image from "next/image";
import Modal from "@components/ui/modal/Modal";
import Button from "@components/ui/button/Button";
import useCollection from "@hooks/useCollection";

export default function Comments() {
  const [numberOfStars, setNumberOfStars] = useState(0);

  // Get collection data
  const { data, error } = useCollection("comments");

  return (
    <>
      <section>
        {data?.map(({ id, avatar, title, name, rating, content }) => {
          return (
            <div key={id} className="bg-white  py-8 lg:py-16">
              <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                    Discussion ({data?.length})
                  </h2>
                </div>
                <div className="rating-stars">
                  {[...new Array(5)].map((_, index) => {
                    return (
                      <Image
                        width={6}
                        height={6}
                        data-value={index + 1}
                        onMouseOver={e => setNumberOfStars(e.target.dataset.value)}
                        key={index}
                        className={
                          index + 1 <= numberOfStars ? "rating-star star" : "rating-star empty star"
                        }
                        src={index + 1 <= numberOfStars ? star : empty}
                        alt={index + 1 <= numberOfStars ? "star" : "empty star"}
                        onClick={() => setNumberOfStars(index + 1)}
                      />
                    );
                  })}
                </div>
                <form className="mb-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 bg-gray-800 border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows={6}
                      className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
                      placeholder="Write a comment..."
                      required
                      defaultValue={""}
                    />
                  </div>
                  <Button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-900 bg-primary-700 rounded-lg hover:bg-primary-800">
                    Post comment
                  </Button>
                </form>
                <article className="p-6 mb-6 text-base bg-white rounded-lg ">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 text-white">
                        <Image
                          width={6}
                          height={6}
                          className="mr-2 w-6 h-6 rounded-full"
                          src="/assets/charger-station.svg"
                          alt={name}
                        />
                        {name}
                      </p>
                      <p className="text-sm text-gray-600 text-gray-400">
                        <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                          Feb. 8, 2022
                        </time>
                      </p>
                    </div>
                  </footer>
                  <p className="text-gray-500 text-gray-400">{content}</p>
                </article>
              </div>
            </div>
          );
        })}
      </section>

      {error && (
        <Modal>
          <p>asd</p>
        </Modal>
      )}
    </>
  );
}
