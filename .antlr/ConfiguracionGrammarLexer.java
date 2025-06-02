// Generated from /Users/ceciliacalvo/ssl-antlr-config/ConfiguracionGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class ConfiguracionGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CONFIG=1, SECCION=2, BOOLEANO=3, CADENA=4, ID=5, NUM=6, LLAVE_ABIERTA=7, 
		LLAVE_CERRADA=8, IGUAL=9, PUNTO_Y_COMA=10, WS=11;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CONFIG", "SECCION", "BOOLEANO", "CADENA", "ID", "NUM", "LLAVE_ABIERTA", 
			"LLAVE_CERRADA", "IGUAL", "PUNTO_Y_COMA", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'configuracion'", "'seccion'", null, null, null, null, "'{'", 
			"'}'", "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CONFIG", "SECCION", "BOOLEANO", "CADENA", "ID", "NUM", "LLAVE_ABIERTA", 
			"LLAVE_CERRADA", "IGUAL", "PUNTO_Y_COMA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ConfiguracionGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ConfiguracionGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000bc\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"<\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003"+
		"B\b\u0003\n\u0003\f\u0003E\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0005\u0004K\b\u0004\n\u0004\f\u0004N\t\u0004\u0001\u0005"+
		"\u0004\u0005Q\b\u0005\u000b\u0005\f\u0005R\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0004\n^\b"+
		"\n\u000b\n\f\n_\u0001\n\u0001\n\u0000\u0000\u000b\u0001\u0001\u0003\u0002"+
		"\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013"+
		"\n\u0015\u000b\u0001\u0000\u0005\u0002\u0000\"\"\\\\\u0002\u0000AZaz\u0003"+
		"\u000009AZaz\u0001\u000009\u0003\u0000\t\n\r\r  h\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0001\u0017\u0001\u0000\u0000\u0000\u0003%\u0001\u0000\u0000\u0000\u0005"+
		";\u0001\u0000\u0000\u0000\u0007=\u0001\u0000\u0000\u0000\tH\u0001\u0000"+
		"\u0000\u0000\u000bP\u0001\u0000\u0000\u0000\rT\u0001\u0000\u0000\u0000"+
		"\u000fV\u0001\u0000\u0000\u0000\u0011X\u0001\u0000\u0000\u0000\u0013Z"+
		"\u0001\u0000\u0000\u0000\u0015]\u0001\u0000\u0000\u0000\u0017\u0018\u0005"+
		"c\u0000\u0000\u0018\u0019\u0005o\u0000\u0000\u0019\u001a\u0005n\u0000"+
		"\u0000\u001a\u001b\u0005f\u0000\u0000\u001b\u001c\u0005i\u0000\u0000\u001c"+
		"\u001d\u0005g\u0000\u0000\u001d\u001e\u0005u\u0000\u0000\u001e\u001f\u0005"+
		"r\u0000\u0000\u001f \u0005a\u0000\u0000 !\u0005c\u0000\u0000!\"\u0005"+
		"i\u0000\u0000\"#\u0005o\u0000\u0000#$\u0005n\u0000\u0000$\u0002\u0001"+
		"\u0000\u0000\u0000%&\u0005s\u0000\u0000&\'\u0005e\u0000\u0000\'(\u0005"+
		"c\u0000\u0000()\u0005c\u0000\u0000)*\u0005i\u0000\u0000*+\u0005o\u0000"+
		"\u0000+,\u0005n\u0000\u0000,\u0004\u0001\u0000\u0000\u0000-.\u0005v\u0000"+
		"\u0000./\u0005e\u0000\u0000/0\u0005r\u0000\u000001\u0005d\u0000\u0000"+
		"12\u0005a\u0000\u000023\u0005d\u0000\u000034\u0005e\u0000\u000045\u0005"+
		"r\u0000\u00005<\u0005o\u0000\u000067\u0005f\u0000\u000078\u0005a\u0000"+
		"\u000089\u0005l\u0000\u00009:\u0005s\u0000\u0000:<\u0005o\u0000\u0000"+
		";-\u0001\u0000\u0000\u0000;6\u0001\u0000\u0000\u0000<\u0006\u0001\u0000"+
		"\u0000\u0000=C\u0005\"\u0000\u0000>B\b\u0000\u0000\u0000?@\u0005\\\u0000"+
		"\u0000@B\t\u0000\u0000\u0000A>\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000"+
		"\u0000BE\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000CD\u0001\u0000"+
		"\u0000\u0000DF\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000FG\u0005"+
		"\"\u0000\u0000G\b\u0001\u0000\u0000\u0000HL\u0007\u0001\u0000\u0000IK"+
		"\u0007\u0002\u0000\u0000JI\u0001\u0000\u0000\u0000KN\u0001\u0000\u0000"+
		"\u0000LJ\u0001\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000M\n\u0001\u0000"+
		"\u0000\u0000NL\u0001\u0000\u0000\u0000OQ\u0007\u0003\u0000\u0000PO\u0001"+
		"\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000"+
		"RS\u0001\u0000\u0000\u0000S\f\u0001\u0000\u0000\u0000TU\u0005{\u0000\u0000"+
		"U\u000e\u0001\u0000\u0000\u0000VW\u0005}\u0000\u0000W\u0010\u0001\u0000"+
		"\u0000\u0000XY\u0005=\u0000\u0000Y\u0012\u0001\u0000\u0000\u0000Z[\u0005"+
		";\u0000\u0000[\u0014\u0001\u0000\u0000\u0000\\^\u0007\u0004\u0000\u0000"+
		"]\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000"+
		"\u0000_`\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000ab\u0006\n\u0000"+
		"\u0000b\u0016\u0001\u0000\u0000\u0000\u0007\u0000;ACLR_\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}