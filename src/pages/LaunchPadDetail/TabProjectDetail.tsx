export function TabProjectDetail() {
  return (
    <div>
      <h2 className="text-[20px] text-white mb-2">Polygon (MATIC)</h2>

      <p className="text-[18px] text-[#A7A7A7] mb-2">
        Scalable, Instant, And Secure Transactions For Blockchains.
      </p>

      <p className="text-[18px] text-[#A7A7A7] mb-2">Apr 1st, 2021</p>

      <ul className="pl-[20px] mb-2">
        <li className="list-disc text-white text-[20px]">
          Polygon (previously Matic Network) is the first well-structured,
          easy-to-use platform for Ethereum scaling and infrastructure
          development. Its core component is Polygon SDK, a modular, flexible
          framework that supports building multiple types of applications.
        </li>

        <li className="list-disc text-white text-[20px]">
          Using Polygon, one can create Optimistic Rollup chains, ZK Rollup
          chains, stand alone chains or any other kind of infra required by the
          developer.
        </li>

        <li className="list-disc text-white text-[20px]">
          Polygon effectively transforms Ethereum into a full-fledged
          multi-chain system (aka Internet of Blockchains). This multi-chain
          system is akin to other ones such as Polkadot, Cosmos, Avalanche etc
          with the advantages of Ethereum’s security, vibrant ecosystem and
          openness.
        </li>
        <li className="list-disc text-white text-[20px]">
          The $MATIC token will continue to exist and will play an increasingly
          important role, securing the system and enabling governance.
        </li>
      </ul>
      {/*  */}
      <h4 className="text-[20px] font-bold mb-2">
        Some of its key features include:
      </h4>

      <ul className="pl-[20px] mb-2">
        <li className="list-disc text-white text-[20px]">
          Scalability: fast, low-cost and secure transactions on Polygon
          sidechains with finality achieved on mainchain and Ethereum as the
          first compatible Layer 1 basechain
        </li>

        <li className="list-disc text-white text-[20px]">
          High throughput: achieved up to 7,000 TPS on a single sidechain on
          internal testnet; Multiple chains to be added for horizontal scaling
        </li>

        <li className="list-disc text-white text-[20px]">
          User experience: smooth UX and developer abstraction from mainchain to
          Polygon chain; native mobile apps and SDK with WalletConnect support
        </li>
        <li className="list-disc text-white text-[20px]">
          Security: Polygon chain operators are themselves stakers in the PoS
          system
        </li>
        <li className="list-disc text-white text-[20px]">
          Public sidechains: Matic sidechains are public in nature (vs.
          individual dApp chains), permissionless and capable of supporting
          multiple protocols
        </li>
      </ul>

      {/*  */}

      <p className="text-[18px] text-[#A7A7A7] mb-2">
        Polygon's mission is to create a plasma-influenced Layer 2 scaling
        solution to "enable throughput capable of meeting the transaction demand
        for mass adoption of dApps".
      </p>

      <p className="text-[18px] text-[#A7A7A7] mb-2">
        Polygon is unique both in terms of its technical approach towards Layer
        2 as well as its potential support for variety of use cases.
      </p>

      {/*  */}

      <ul className="pl-[20px] mb-2">
        <li className="list-disc text-white text-[20px]">
          Polygon's Layer 2 is an account-based variant of MoreVP (More Viable
          Plasma). The Plasma framework is used to guarantee the security of
          assets on the main chain (such as ERC-20 and ERC-721 tokens for
          Ethereum), while generic transactions are secured by a Proof-of-Stake
          network, built on top of Tendermint. Polygon sidechains are
          essentially EVM-enabled chains and are conducive to ready deployment
          of solidity smart contracts, essentially making it an easy tool for
          Ethereum Developers to use it for scaling their dApps/Protocols.
        </li>

        <li className="list-disc text-white text-[20px]">
          Commercially, Polygon sidechains are structurally effective for
          supporting many Decentralized Finance (DeFi) protocols available in
          the Ethereum ecosystem.
        </li>

        <li className="list-disc text-white text-[20px]">
          Polygon's core philosophy is to enable dApps to compete with the user
          experience that is offered by centralized apps today.
        </li>
        <li className="list-disc text-white text-[20px]">
          Ethereum is the first basechain Polygon supports, but Polygon intends
          to offer support for additional basechains, based on community
          suggestions and consensus, to enable an interoperable decentralized
          Layer 2 blockchain platform.
        </li>
      </ul>

      <h4 className="text-[20px] font-bold mb-2">
        Within Polygon, the MATIC token has three key use cases:
      </h4>

      <ul className="pl-[20px] mb-2">
        <li className="list-disc text-white text-[20px]">
          Participating in the Proof of Stake consensus: Polygon sidechains
          enforce consensus using a Proof-of-Stake (PoS) layer in which network
          participants stake MATIC tokens to participate as validators.
        </li>

        <li className="list-disc text-white text-[20px]">
          Paying for the transaction fees in the network: The transaction fees
          on Polygon sidechains are paid in MATIC tokens. The more users onboard
          to use the apps on Polygon, the more the transaction volume and hence
          the transaction fees. The MATIC token is also used to pay staking
          rewards to the POS stakers
        </li>

        <li className="list-disc text-white text-[20px]">
          Having taken inspiration from Livepeer and its "protocol funding the
          ecosystem" model, Polygon intends to enable a separate staking
          mechanism for supporting the ecosystem projects. This will help create
          a fund out of the "block rewards" that can help support developers
          working on features and dApps needed by the network to get a part of
          block rewards. This mechanism is funded by reserving a percentage of
          the transaction fees in-protocol to support the projects building for
          enhancing Polygon's Ecosystem.
        </li>
      </ul>
    </div>
  );
}
