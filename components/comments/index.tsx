import Image from 'next/image'
import React from 'react'

export const Comments = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0 mt-12">
      <div className="mx-auto md:w-3/5">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">Trusted by thousands</h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">Repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="./assets/avatars/avatar.webp" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <img className="h-12 w-12 rounded-full" src="./assets/avatars/avatar-1.webp" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                </div>
              </div><p>Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <Image className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/33" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div><p>Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <Image className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/125" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div><p>Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <Image className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/177" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                </div>
              </div><p>Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 sm:hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <Image className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/301" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div><p>Architecto laboriosam. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <Image className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/242" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                </div>
              </div><p>Illum aliquid quo deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div className="flex gap-4">
                <Image className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/124" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
                </div>
              </div><p>Illum aliquid quo deleniti aperiam ab veniam Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

