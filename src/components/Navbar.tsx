import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserAvatar from "./UserAvatar";
import NoAuthNavLinks from "./NoAuthNavLinks";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.SUPERADMIN_EMAIL;

  return (
    <nav className="sticky z-[50] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Wear<span className="text-primary">Craft</span>
          </Link>

          <div className="h-full flex items-center space-x-8">
            {user ? (
              <>
                <UserAvatar userImage={user?.picture} isAdmin={isAdmin} />

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <div className="h-full flex items-center space-x-4">
                  <Link
                    href="/products"
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })}
                  >
                    Shop
                    <ShoppingBag className="ml-1.5 h-5 w-5" />
                  </Link>
                  <Link
                    href="/customize/upload"
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })}
                  >
                    Customize
                    <ArrowRight className="ml-1.5 h-5 w-5" />
                  </Link>
                </div>
              </>
            ) : (
              <NoAuthNavLinks />
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
